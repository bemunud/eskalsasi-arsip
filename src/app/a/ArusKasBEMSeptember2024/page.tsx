"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    // URL tujuan yang diinginkan
    const targetUrl = 'https://drive.google.com/drive/folders/1KEhbp-X4hnoGLSqg6gcnwGotWP-7Ux1o';
    
    // Redirect ke URL tersebut
    router.push(targetUrl);
  }, [router]);

  return null; // Karena kita hanya redirect, tidak perlu merender apapun
}
