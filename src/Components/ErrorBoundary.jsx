import { Link, Navigate } from 'react-router-dom';
import { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error(error, info);
  }
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    } else if (this.state.hasError) {
      return (
        <h1>
          Something went wrong, <Link to="/">click here</Link> to go to the home
          page or wait 5 seconds or we'll do it for you
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
