import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import { Button } from "./ui/button";

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
  name?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`Uncaught error in ${this.props.name || 'Component'}:`, error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[400px] w-full flex flex-col items-center justify-center p-8 border-2 border-dashed border-destructive/30 bg-destructive/5 space-y-6 text-center animate-in fade-in duration-500">
          <div className="bg-destructive/10 p-4 rounded-full">
            <AlertTriangle className="h-10 w-10 text-destructive" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-black uppercase tracking-tighter text-foreground">
              {this.props.name ? `${this.props.name} Offline` : "System Malfunction"}
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs font-medium">
              A deterministic error occurred in this module. Operational integrity is being maintained.
            </p>
          </div>
          <Button 
            onClick={() => window.location.reload()}
            variant="outline"
            className="rounded-none border-destructive/50 hover:bg-destructive/10 hover:text-destructive gap-2 text-[10px] font-black uppercase tracking-widest"
          >
            <RefreshCcw className="h-3 w-3" />
            Restart Module
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
