import React, { Component } from 'react';
import statisticsService from '../services/statistics-service';

const { Consumer, Provider } = React.createContext();

class StatisticsProvider extends Component {
    state = {
        statistics: []
      }

    componentDidMount () {
        statisticsService.getAll()
         .then((data) => {
             console.log('problem with value')
             this.setState({ statistics: data })
            })
         .catch((err) => this.setState({ statistics: [] }));
      }

    render() {
        const { statistics } = this.state;

        return (
            <Provider value={{ statistics }}  >
                {this.props.children}
            </Provider>
        )
    }
}

    const statistics = (WrappedComponent) => {
  
    return function (props) {
      return(
        <Consumer>
          { (value) => {
            const { statistics } = value;

            return (
              <WrappedComponent 
                statistics={statistics} 
                {...props}
              />
            )

          } }
        </Consumer>
        )
    }
}

export { StatisticsProvider, statistics } 