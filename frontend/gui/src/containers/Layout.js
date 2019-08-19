import React from 'react';

const CustomLayout = (props) => {
    return (
        <div className="layout">
            {/* <header className="App-header"> */}
            <nav class="navbar navbar-expand-sm navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a class="navbar-brand" href="Home" >ExamDjangoMovies</a>
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    </ul>

                </div>
            </nav>
            {/* </header> */}
        </div>

    );
}

export default CustomLayout;