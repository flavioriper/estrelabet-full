import { NextResponse } from 'next/server';

export async function GET() {
  // const response = await fetch('http://localhost:8000', { headers: { 'Access-Control-Allow-Origin': '*' } });
  return NextResponse.json({ message: 'Hello from Next.js 14' });
}
