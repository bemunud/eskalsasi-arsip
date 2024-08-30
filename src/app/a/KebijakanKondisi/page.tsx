"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    // URL tujuan yang diinginkan
    const targetUrl = 'https://bemunud.notion.site/Pembaruan-Kebijakan-Domain-bemunud-id-9c88daf559214de99bda63d1ccc0155d?pvs=4';
    
    // Redirect ke URL tersebut
    router.push(targetUrl);
  }, [router]);

  return null; // Karena kita hanya redirect, tidak perlu merender apapun
}
