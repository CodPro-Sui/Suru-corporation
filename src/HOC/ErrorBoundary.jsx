import { Component } from "react";

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {hasError: false}
    }
    static getDerivedStateFromError(err){
        return {hasError: true}
    }

    render(){
        if(this.state.hasError){
            <h2 className="err">😭 something went wrong</h2>
        }

        return this.props.children
    }
}

export default ErrorBoundary;