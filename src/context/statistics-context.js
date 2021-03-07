import React from 'react';
import authService from '../services/auth-service';

const { Consumer, Provider } = React.createContext();

class StatisticsProvider extends Component {
    state = {
        statistics: []
      }

    /* call getAll() in componentDidMount()
    or, declare the function */

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export { StatisticsProvider, statistics } 