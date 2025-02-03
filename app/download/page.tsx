"use client";
import { motion } from "framer-motion";
import { Download, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
const downloads = [
  {
    platform: "macOS",
    image: "/images/icons8-apple-logo-150.png",
    requirements: "Requires macOS 11 Big Sur or later",
    version: "1.0.0",
    size: "24.5 MB",
  },
  {
    platform: "Linux",
    image: "/images/icons8-linux-100.png",
    requirements: "Requires Ubuntu 20.04 or compatible distribution",
    version: "1.0.0",
    size: "22.8 MB",
  },
  {
    platform: "Windows",
    image: "/images/icons8-windows8-100.png",
    requirements: "Requires Windows 10 or later",
    version: "1.0.0",
    size: "25.2 MB",
  },
];

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Download OrderPro Extension</h1>
          <p className="text-xl text-muted-foreground">
            Choose your platform to get started with OrderPro
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {downloads.map(({ platform, image, requirements, version, size }) => (
            <motion.div
              key={platform}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-8 hover:shadow-lg transition-all">
                <div className="flex flex-col items-center text-center">
                  <Image src={image} alt={`${platform} logo`} width={64} height={64} className="mb-6" />
                  <h2 className="text-2xl font-bold mb-2">{platform}</h2>
                  <p className="text-sm text-muted-foreground mb-4">{requirements}</p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
                    <span>Version {version}</span>
                    <span>•</span>
                    <span>{size}</span>
                  </div>
                  <Button className="w-full" size="lg">
                    <Download className="mr-2 h-4 w-4" />
                    Download for {platform}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">System Requirements</h3>
          <div className="max-w-2xl mx-auto text-muted-foreground">
            <p className="mb-2">
              • Minimum 4GB RAM
            </p>
            <p className="mb-2">
              • 100MB free disk space
            </p>
            <p>
              • Active internet connection for real-time order processing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}