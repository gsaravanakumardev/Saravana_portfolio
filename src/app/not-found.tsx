import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground">
      <Card className="w-full max-w-md mx-4 border-white/10 bg-secondary/30">
        <CardContent className="pt-6 text-center">
          <div className="flex flex-col items-center mb-6 gap-2">
            <AlertCircle className="h-12 w-12 text-primary mb-2" />
            <h1 className="text-3xl font-bold text-white">
              404 Page Not Found
            </h1>
          </div>

          <p className="mt-2 text-sm text-muted-foreground mb-6">
            The page you are looking for does not exist or has been moved.
          </p>

          <Link href="/" className="inline-block px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
            Back to Home
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
