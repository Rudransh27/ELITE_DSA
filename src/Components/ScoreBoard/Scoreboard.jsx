import React from 'react'
import './scoreboard.css'

const Scoreboard = () => {
    return (<>
        <div className="title">
            <h1>Questions Solved</h1>
            <p className="established">Week 1</p>
        </div>
        <div className="board">
            <div className="main">
                <div id="header">
                    <h1>Ranking</h1>
                    <button className="share">
                        Solved Questions
                    </button>
                </div>
                <div id="leaderboard">
                    <table>
                        <tr>
                            <td className="number">1</td>
                            <td className="name">Rudransh</td>
                            <td className="points">10</td>
                        </tr>
                        <tr>
                            <td className="number">1</td>
                            <td className="name">Prajwal</td>
                            <td className="points">10</td>
                        </tr>
                        <tr>
                            <td className="number">2</td>
                            <td className="name">Chanchal</td>
                            <td className="points">6</td>
                        </tr>
                        <tr>
                            <td className="number">3</td>
                            <td className="name">Yogesh</td>
                            <td className="points">6</td>
                        </tr>
                        <tr>
                            <td className="number">3</td>
                            <td className="name">Siddhesh</td>
                            <td className="points">6</td>
                        </tr>
                        <tr>
                            <td className="number">3</td>
                            <td className="name">Chetan</td>
                            <td className="points">6</td>
                        </tr>
                        <tr>
                            <td className="number">4</td>
                            <td className="name">Abhi</td>
                            <td className="points">4</td>
                        </tr>
                        <tr>
                            <td className="number">4</td>
                            <td className="name">Vaibhav</td>
                            <td className="points">4</td>
                        </tr>
                        <tr>
                            <td className="number">5</td>
                            <td className="name">Pranjal</td>
                            <td className="points">2</td>
                        </tr>
                        <tr>
                            <td className="number">5</td>
                            <td className="name">Karan</td>
                            <td className="points">2</td>
                        </tr>

                    </table>
                </div>
            </div >
        </div>
    </>
    )

}

export default Scoreboard;