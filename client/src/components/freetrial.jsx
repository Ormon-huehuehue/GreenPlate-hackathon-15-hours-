import {Link} from 'react-router-dom'

function Free () {
    return (<main className="free-trial">
        <div className="free-trial">
            <h1>Start a free trial</h1>
            <p>Get started with a new account in no time. Try it for 14 days. No credit card required.</p>
            <Link to="/">Start free trial</Link>
        </div>
        </main>
    )
}

export default Free