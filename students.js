import React from "react";

class Students extends React.Component {
    constructor () {
        super();
        this.state = {
            score: 0,
            success: false,
            fail: false
        }
    }

    componentDidMount(){
        this.setState ({
            score: this.props.score
        });
    }
    
    
    addScore() {
        this.setState ({
            score: this.state.score + 1
        },

            () => {
                if(this.state.score >= 460){
                    this.setState({success: true})
                }else{
                    this.setState({success: false}) 
                }
            }
        )
    }

    delScore() {
        this.setState ({
            score: this.state.score - 1
        },

            () => {
                if(this.state.score <= 445){
                    this.setState({fail: true})
                }else{
                    this.setState({fail: false})
                }
            }
        )
    }

    render(){

        const isSuccess = this.state.success
        let suc;
        if(isSuccess){
            suc = <span id = 'succ'>Success</span>
        }else{
            suc = ''; 
        }

        const isFail = this.state.fail
        let fai;
        if(isFail){
            fai = <span id = 'fail'>Fail</span>
        }else{
            fai = ''; 
        }




        return(
            <div>
                <div className = 'left'>
                    <h4 className = 'name'>
                    <button className = 'inc' onClick = {() => this.addScore ()}>+</button> 
                    {this.props.name} 
                    <button className = 'dec' onClick = {() => this.delScore ()}>-</button>
                    </h4>
                    <p className = 'uniname'> {suc} {this.props.uni} {fai} </p>
                </div>

                <div className = 'right'>
                    <p className = 'score'> {this.state.score} </p>
                </div>
            </div>

        );

    

    }
  }


export default Students;