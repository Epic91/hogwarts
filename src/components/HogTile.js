import React from 'react'



class HogTile extends React.Component {
    constructor () {
        super()
        this.state = {
            showDetails: false 
        }
    }

    renderImage = () => {
        //we needed to come up with a variable for name because the file names in the file vs data didnt match. In the data they were Caps and spaced and in the file they are all lower cased and underscored
        const name = this.props.hog.name.toLowerCase().split(' ').join('_')
        const style= {margin: 'auto'}
        const pigImage = require(`../hog-imgs/${name}.jpg`)
        return <img src={pigImage} style={style} height={'150px'} width='150px'/>  
    }

    renderDetails = () => {
        const { specialty, weight, ['highest medal achieved']: medal } = this.props.hog
        return (
            <div>
                <p>Specialty: {specialty}</p>
                <p>Weight: {weight}</p>
                <p>Medal: {medal}</p>
            </div>
        )
    }

    handleToggleDetails = () => {
        this.setState({ 
            showDetails: !this.state.showDetails
        })
    }

    render (){
        return (
            <div className='ui card pigTile'>
                <h5>{this.props.hog.name}</h5>
                {this.renderImage()}
            <button onClick={this.handleToggleDetails}>Toggle Details</button>
            {this.state.showDetails ? this.renderDetails() : null}
            </div>
        )
    }
}

export default HogTile