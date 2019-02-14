import React, { Component } from 'React';
import './flower.css'

class Flower extends Component {
    constructor(props){
        super(props);

        this.flower = React.createRef()
    }
    
    componentDidMount() {
        window.setTimeout(() => {
            this.flower.current.style.height = this.props.height.toString()+'%';
            this.flower.current.style.bottom = this.props.bottom.toString()+'px';
            this.flower.current.style.left = this.props.left.toString()+'px';
            let droplets = Array.from(this.flower.current.getElementsByClassName('droplet'));
            
            droplets.forEach((droplet, i) => {
                if (i % 2)
                    droplet.style.backgroundColor = this.props.colorSet[1];
                else
                    droplet.style.backgroundColor = this.props.colorSet[0];
            });
            
        }, 5);

        if (this.props.growOnPageLoad)
            this.grow();

    }
    displayFlower = () => {
        const droplets = Array.from(this.flower.current.getElementsByClassName('droplet'));
       
        droplets.forEach(droplet => {
            droplet.style.height = this.props.flowerSize.toString()+'px';
            droplet.style.width = this.props.flowerSize.toString()+'px';
            droplet.style.animationPlayState = 'running';
        });
    }

    displayLeaves = () => {
        const leaves = Array.from(this.flower.current.getElementsByClassName('leaf'));
        leaves.forEach( (leaf, i) => {
            leaf.style.transform = 'scale(1)';
            if (i % 2 === 0) {
                leaf.style.left = '-32px';
                leaf.style.bottom = '10px';
            } else {
                leaf.style.left = '8px';
                leaf.style.bottom = '41px';
            }
        });
      
    };

    grow = () => {
        if (typeof window !== undefined){
            const stemHeight = window.innerHeight * this.props.height * .01 - 64 - 140;
            let stem = this.flower.current.getElementsByClassName('stem')[0];
            window.setTimeout(() => {
                stem.style.height = stemHeight.toString()+'px';
            
                window.setTimeout(this.displayFlower, 1800);
                window.setTimeout(this.displayLeaves, 1500);
            }, this.props.delay || 1000);
        };
    };

    render(){
        
        return (
            <div className="flower-container" ref={this.flower}>
                <div className="stem">
                    <div className="leaf leaf-1"></div>
                    <div className="leaf leaf-2"></div>
                
                </div>
                <div className="pot-outline"></div>
                <div className="droplet" id="no1"></div>
                <div className="droplet" id="no2"></div>
                <div className="droplet" id="no3"></div>
                <div className="droplet" id="no4"></div>
                <div className="droplet" id="no5"></div>
                <div className="droplet" id="no6"></div>
                <div className="droplet" id="no7"></div>
                <div className="droplet" id="no8"></div>
                <div className="droplet" id="no9"></div>
                <div className="droplet" id="no10"></div>
                <div className="pot" onClick={this.grow}></div>
    
            </div>
        )

    }
}

export default Flower