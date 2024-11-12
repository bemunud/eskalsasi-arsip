"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    // URL tujuan yang diinginkan
    const targetUrl = 'https://drive.google.com/file/d/1Dz1x6rYMwrM5PT4w6Urvi0cN4O682ub4/view?usp=sharing';
    
    // Redirect ke URL tersebut
    router.push(targetUrl);
  }, [router]);

  return null; // Karena kita hanya redirect, tidak perlu merender apapun
}
