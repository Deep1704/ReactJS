export default function Home() {
    return (
        <>
            <div className="container-fluid">
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="1000">
                            <img src="https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" height={425 + "rem"} class="d-block w-100 mx-1 my-3" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" height={425 + "rem"} class="d-block w-100 mx-1 my-3" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://miro.medium.com/max/775/0*rZecOAy_WVr16810" height={425 + "rem"} class="d-block w-100 mx-1 my-3" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="container-fluid">
                    <div class="row row-cols row-cols-md-2 g-5">

                        <div class="col">
                            <div class="card">
                                <img src="https://media.istockphoto.com/photos/educational-words-presentation-picture-id1281801371?k=20&m=1281801371&s=170667a&w=0&h=2T5pE-tFFXOscMOAy5dwLpKvmhqCmZdfF2wamNF62og=" height={325 + "rem"} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" height={325 + "rpm"} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}


