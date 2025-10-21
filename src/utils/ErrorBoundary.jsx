import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Log to console (and replace with your monitoring integration)
    console.error("Uncaught render error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center">
          <h1 className="text-2xl font-semibold">Application Error</h1>
          <p className="mt-2 text-gray-600">
            An unexpected error occurred. We have logged the problem.
          </p>
          {this.state.error?.message && (
            <pre className="mt-4 text-sm text-left max-w-xl mx-auto bg-gray-100 p-3 rounded">
              {String(this.state.error.message)}
            </pre>
          )}
        </div>
      );
    }
    return this.props.children;
  }
}
