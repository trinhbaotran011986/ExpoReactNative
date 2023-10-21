import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ErrorBoundary extends Component {

    state = { hasError: false };

    static getDerivedStateFromError(error) {
        // Update state to show the fallback UI during the next render phase
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // logging the error details
    }

    render() {
        if (this.state.hasError) {
            // Return the fallback UI
            return <View style={{ 'text-align': 'center' }}><Text>Unfortunately, something went wrong.</Text></View>;
        }

        return this.props.children;
    }
}