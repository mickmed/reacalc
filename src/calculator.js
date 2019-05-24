import React, { Component } from "react";
import { string } from "postcss-selector-parser";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eq: '',
            ans: 0
        };
    }

    handleChange = (event) => {
        console.log(event.keyCode)
        let val = event.target.value
        
        console.log(val)
        this.setState({ eq: val })
        event.preventDefault();
    }

    clkButton = event => {
        let eqStr = event.target.innerText
        this.setState(prevState => {
            return {
                eq: prevState.eq + eqStr
            }
        })
        
        event.preventDefault();
    }

    clkEquals = event => {
        event.preventDefault()
        this.handlePercent()
    }

    clkClear = event => {
        this.setState({ ans: 0, eq: '' })
    }

    handlePercent = () => {
        console.log(this.state.eq)
       
        let rawEq=this.state.eq
        if(rawEq.includes('%')){
            
            rawEq = rawEq.replace('%', '*1/100*')
            
        }
        console.log(rawEq)
        let lastInEq = parseInt(rawEq.slice(-1))
        !isNaN(lastInEq) && this.setState({ ans: eval(rawEq) })
        
    }

    handleKeyDown = event => {
        this.handlePercent()
        // if (event.keyCode === 53) {
        //     val = '*100*'
        //     console.log('100')
        // } else {
        //     val = event.target.value
        // }

        
        this.state.eq === '' &&  this.setState({ ans: '' }) 
        
    }

   

    render() {
        const style = {
            fontSize:'50px'
        }
        return (
            <div className="container">
                <div className="inner-cont">
                    <h1><i>React Math Master</i></h1>
                    <form>
                        <div className="inputs">
                            <input
                                type="text"
                                value={this.state.eq}
                                onKeyUp={this.handleKeyDown}
                                onChange={this.handleChange}
                                autoFocus

                            />
                            <span className="equalsSign">=</span>
                            {/* <input
                                type="text"
                                value={this.state.ans}
                                onChange={this.handleChange}
                            /> */}
                            <div style={style}>{this.state.ans}</div>
                        </div>
                        <div>
                            <button type="button" onClick={this.clkButton}>1</button>
                            <button type="button" onClick={this.clkButton}>2</button>
                            <button type="button" onClick={this.clkButton}>3</button>
                            <button type="button" onClick={this.clkButton}>4</button>
                            <button type="button" onClick={this.clkButton}>5</button>
                            <button type="button" onClick={this.clkButton}>6</button>
                            <button type="button" onClick={this.clkButton}>7</button>
                            <button type="button" onClick={this.clkButton}>8</button>
                            <button type="button" onClick={this.clkButton}>9</button>
                            <button type="button" onClick={this.clkButton}>0</button>
                            <button type="button" onClick={this.clkButton}>.</button>
                        </div>
                        <div>
                            <button type="button" onClick={this.clkButton}>+</button>
                            <button type="button" onClick={this.clkButton}>-</button>
                            <button type="button" onClick={this.clkButton}>*</button>
                            <button type="button" onClick={this.clkButton}>/</button>
                            <button type="button" onClick={this.clkButton}>%</button>
                            <button type="button" onClick={this.clkEquals}>=</button>

                            <button type="button" onClick={this.clkClear}>C</button>
                        </div>

                        {/* <input type="submit" value="Submit" /> */}
                    </form>
                </div>
            </div>
        );
    }
}

export default Calculator;
