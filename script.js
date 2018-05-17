//create a class for the markdown previewer
class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: "Heading\n=======\r\n\r\nSub-heading\r\n-----------\r\n\r\n### Another deeper heading\r\n\r\nParagraphs are separated\r\nby a blank line.\r\n\r\nLeave 2 spaces at the end of a line to do a\r\nline break\r\n\r\nText attributes *italic*, **bold**,\r\n`monospace`, ~~strikethrough~~ .\r\n\r\nShopping list:\r\n\r\n  * apples\r\n  * oranges\r\n  * pears\r\n\r\nNumbered list:\r\n\r\n  1. apples\r\n  2. oranges\r\n  3. pears\r\n\r\nThe rain---not the reign---in\r\nSpain.\r\n\r\n *[Herman Fassett](https:\/\/freecodecamp.com\/hermanfassett)*"};
    this.changeContent = this.changeContent.bind(this);
  }
  changeContent(e) {//change the state content when user input changes in the editor pane
    this.setState({content: e.target.value});
  }
  markContent() {//change the text in the preview pane to reflect the current state
    return {__html: marked(this.state.content)};
  }
  render() {
    return(
      <div className="row">
        <div className="col-sm-offset-2 col-sm-4">
          <textarea type="text" onChange={this.changeContent} value={this.state.content}></textarea>
        </div>
        <div className="col-sm-6" dangerouslySetInnerHTML={this.markContent()} />
      </div>
    );
  }
};

ReactDOM.render(<Markdown />, document.getElementById('app'));
