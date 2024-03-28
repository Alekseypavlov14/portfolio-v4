import { UNAUTHORIZED_RESPONSE, validateRequestAuthorization } from '@/modules/auth'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  if (!await validateRequestAuthorization(request)) return UNAUTHORIZED_RESPONSE
  
  return NextResponse.json({})
}