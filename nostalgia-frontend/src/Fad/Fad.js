class FadCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            image_url: '',
            description: '',
            decade: ''
        }
        this.handleValueChange = this.handleValueChange.bind(this)
        this.submitImage = this.submitImage.bind(this)
    }

    handleValueChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        })
    }


render() {
    return (
        <div>
            <div className="Container">
            <StyledEditArticle>
                <StyledHeader>
                    Submit a photo to our Amateur Astronomers Gallery
                </StyledHeader>
                <StyledForm>
                    <StyledInput 
                    name="url"
                    type="text"
                    value={this.state.url}
                    placeholder="Web Address"
                    onChange={this.handleValueChange}
                    />
                </StyledForm>
                <StyledForm>
                    <StyledInput 
                    name="title"
                    type="text"
                    value={this.state.title}
                    placeholder="Title"
                    onChange={this.handleValueChange}
                    />
                </StyledForm>
                <StyledForm>
                    <StyledInput 
                    name="author"
                    type="text"
                    value={this.state.author}
                    placeholder="Author Name"
                    onChange={this.handleValueChange}
                    />
                </StyledForm>
                <StyledForm>
                    <StyledInput 
                    name="description"
                    type="text"
                    value={this.state.description}
                    placeholder="Short Description"
                    onChange={this.handleValueChange}
                    />
                    <Link to={'/Amateur'}>
                        <StyledSubmitClick onClick={this.submitImage}>
                            Submit Image
                        </StyledSubmitClick>
                    </Link>
                </StyledForm>
            </StyledEditArticle>
            </div>
            </div>
            )
        }
}

    export default FadCreate