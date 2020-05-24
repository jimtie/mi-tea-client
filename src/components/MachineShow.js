import React, {Component} from 'react'
import '../styles.css'

class MachineShow extends Component {
  
state = {
  machine: this.props.machine,
}

render() {
  return(
    <>
        <div className="machineImage">
        </div>
        <article className="machine-text">
          <p><small>
            Mi-TEA machine is designed for tea lovers. It enables users to brew up to 3 kind of teas at the same time and them blended them together in different portions. It's all about flavor and fun!
          </small></p>
        </article>

    </>
    )
  }
}

export default MachineShow