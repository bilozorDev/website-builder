import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// Ensure that the request is a POST request
export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('file'); // Extract the file from formData

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Read the file as a buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Define the file path where the image will be saved (inside the public folder)
    const filePath = path.join(process.cwd(), 'public', 'uploads', 'logo.png');

    // Ensure the directory exists
    await fs.mkdir(path.dirname(filePath), { recursive: true });

    // Save the file to the server
    await fs.writeFile(filePath, buffer);

    return NextResponse.json({ message: 'File uploaded successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error: 'File upload failed' }, { status: 500 });
  }
}
