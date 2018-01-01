import * as React from 'react';

interface Props {
}

interface State {
    date: Date;
    datetime: Date;
}

class ServerTime extends React.Component<Props, State> {

    private isMounted: false;

    componentDidMount(): void {
        Promise.all(['/api/sample/date', '/api/sample/datetime'].map(url => fetch(url).then(res => res.json())))
            .then(values => {
                if (this.isMounted) {
                    this.setState({
                        date: new Date(values[0]),
                        datetime: new Date(values[1])
                    });
                }
            });
    }

    componentWillUnmount(): void {
        this.isMounted = false;
    }

    render() {
        if (!this.state) {
            return <p>Loading...</p>;
        } else {
            return (
                <ul>
                    <li>server date: {this.state.date.toLocaleDateString()}</li>
                    <li>server datetime:
                        {this.state.date.toLocaleDateString()}
                        {this.state.datetime.toLocaleTimeString()}
                    </li>
                </ul>
            );
        }
    }
}

export default ServerTime;