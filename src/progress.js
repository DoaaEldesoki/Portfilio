import React from "react";
class Progress extends React.Component {
    constructor() {
        console.log('progress');
        super();
        this.state = {
            value: 70,
          };
    }
    render() {
        return (
            <div>
                <div class="progress">
                    <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="70"  value= '70' aria-valuemin="0" aria-valuemax="100" style={{ width: `${this.props.value}` }}>
                    </div>
                </div>

            </div>
        )
    }
}
export default Progress;