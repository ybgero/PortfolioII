import { NextRequest, NextResponse } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';
import mammoth from 'mammoth';
import DOMMatrix from 'dommatrix';

if (typeof globalThis.DOMMatrix === 'undefined') {
  globalThis.DOMMatrix = DOMMatrix as any;
}

// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment
const { getDocument } = require('pdfjs-dist/build/pdf');

const projectDetailsDir = path.join(process.cwd(), 'public', 'project-details');

// Map project names to file names
const projectFileMap: Record<string, string> = {
  'NovaMart Dashboard': 'NovaMart  Dashboard.pdf',
  'Campaign Performance Monitoring': 'CampaignPerformance Monitoring.gif',
  'HR Analytics Dashboard': '📊 HR Analytics Dashboard.pdf',
  'Customer Insights Dashboard': 'Customer Insight Dasboard.docx',
  'PlantCo. Performance Dashboard': 'PlantCo. Performance Dashboard.pdf',
  'Blockbuster Insights': 'Correlation(BudgetVsGross).pdf',
};

async function extractTextFromDOCX(filePath: string): Promise<string> {
  try {
    const buffer = fs.readFileSync(filePath);
    const result = await mammoth.extractRawText({
      arrayBuffer: buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength),
    });
    return result.value.trim().replace(/\s+/g, ' ').slice(0, 1200);
  } catch (error) {
    console.error('Error extracting DOCX content:', error);
    return '';
  }
}

async function extractTextFromPDF(filePath: string): Promise<string> {
  try {
    const rawData = fs.readFileSync(filePath);
    const loadingTask = getDocument({ data: rawData });
    const pdf = await loadingTask.promise;

    let extractedText = '';
    const pageCount = Math.min(pdf.numPages, 3);

    for (let pageNumber = 1; pageNumber <= pageCount; pageNumber++) {
      const page = await pdf.getPage(pageNumber);
      const textContent = await page.getTextContent();
      const pageText = textContent.items
        .map((item: any) => (item.str ? item.str : ''))
        .join(' ');
      extractedText += `${pageText} \n\n`;
      if (extractedText.length > 1200) break;
    }

    return extractedText.trim().replace(/\s+/g, ' ').slice(0, 1200);
  } catch (error) {
    console.error('Error extracting PDF content:', error);
    return '';
  }
}

export async function GET(request: NextRequest) {
  const projectName = request.nextUrl.searchParams.get('project');

  if (!projectName) {
    return NextResponse.json({ error: 'Project name required' }, { status: 400 });
  }

  const fileName = projectFileMap[projectName];
  if (!fileName) {
    return NextResponse.json({ error: 'Project details not found' }, { status: 404 });
  }

  const filePath = path.join(projectDetailsDir, fileName);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: 'Project file not found' }, { status: 404 });
  }

  try {
    let preview = '';
    let fileType = '';

    if (fileName.endsWith('.pdf')) {
      fileType = 'pdf';
      preview = await extractTextFromPDF(filePath);
    } else if (fileName.endsWith('.docx')) {
      fileType = 'docx';
      preview = await extractTextFromDOCX(filePath);
    } else if (fileName.endsWith('.gif')) {
      fileType = 'gif';
      preview = '';
    }

    return NextResponse.json({
      project: projectName,
      fileName,
      fileType,
      preview,
      fileUrl: `/project-details/${fileName}`,
    });
  } catch (error) {
    console.error('Error processing project details:', error);
    return NextResponse.json({ error: 'Failed to process project details' }, { status: 500 });
  }
}
