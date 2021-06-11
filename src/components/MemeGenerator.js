import React from "react";

class MemeGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            topTxt: "",
            bottomTxt: "",
            randImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.arrLength = null;
        this.randomNum = null;
    }

    componentDidMount() {
        const getData = async () => {
            try {
                const response = await fetch("https://api.imgflip.com/get_memes");
                const obj = await response.json();
                const { memes } = obj.data;
                this.setState({
                    allMemeImgs: memes
                })
                this.arrLength = this.state.allMemeImgs.length - 1;
            } catch(err) {
                console.log("Error: ", err);
            }
        }

        getData();
    }

    handleChange = evt => {
        const { name, value } = evt.target;
        this.setState({ [ name ] : value });
    }

    handleSubmit = evt => {
        evt.preventDefault();
        this.randomNum = Math.floor(Math.random()*this.arrLength);
        this.setState(prev => {
            return {
                randImg: this.state.allMemeImgs[this.randomNum].url
            }
        })
    }

    render() {
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input type="text" name="topTxt" value={this.state.topTxt} onChange={this.handleChange} placeholder="Top Text"/>
                    <input type="text" name="bottomTxt" value={this.state.bottomTxt} onChange={this.handleChange} placeholder="Bottom Text"/>
                    <button>Gen</button>
                </form>
                <div className="meme">
                    {this.state.isLoading ? <p>Loading...</p> : <img src={this.state.randImg} alt="Random" />}
                    <h2 className="top">{this.state.topTxt}</h2>
                    <h2 className="bottom">{this.state.bottomTxt}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator;