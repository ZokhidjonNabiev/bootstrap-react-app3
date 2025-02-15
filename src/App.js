import bigBanner from './big-banner-image.jpg';
import minImage from './min-image.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container">
            <a class="navbar-brand" href="#">Start Bootstrap</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contact</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#"  >Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className='introduction text-center py-5 bg-light border-bottom mb-4'>
          <h1 className='fw-bolder mt-5'>Welcome to Blog Home!</h1>
          <p className='lead mb-5'>A Bootstrap 5 starter layout for your next blog homepage</p>
      </section>

        <section className='menu'>
          <div className="container">
            <div className="row mb-4">
              <div className="col-lg-9">
                <div class="card p-0">
                  <img src={bigBanner} class="card-img-top" alt="big-banner-image" />
                  <div class="card-body">
                    <p className='text-muted'>January 1, 2023</p>
                    <h5 class="card-title">Featured Post Title</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                    <a href="#" class="btn btn-primary">Read more →</a>
                  </div>
                </div>

                <div className="row mb-4 gy-4 mt-2">
                  <div className="col-lg-6">
                    <div class="card">
                      <img src={minImage} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <p className='text-muted'>January 1, 2023</p>
                        <h5 class="card-title">Post Title</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                        <a href="#" class="btn btn-primary">Read more →</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div class="card">
                      <img src={minImage} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <p className='text-muted'>January 1, 2023</p>
                        <h5 class="card-title">Post Title</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                        <a href="#" class="btn btn-primary">Read more →</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                      <div class="card">
                        <img src={minImage} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p className='text-muted'>January 1, 2023</p>
                          <h5 class="card-title">Post Title</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                          <a href="#" class="btn btn-primary">Read more →</a>
                        </div>
                      </div>
                  </div>

                  <div className="col-lg-6">
                      <div class="card">
                        <img src={minImage} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p className='text-muted'>January 1, 2023</p>
                          <h5 class="card-title">Post Title</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                          <a href="#" class="btn btn-primary">Read more →</a>
                        </div>
                      </div>
                  </div>

             
                </div>

                  <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                      <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Older</a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#">1</a></li>
                      <li class="page-item"><a class="page-link" href="#">2</a></li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                      <li class="page-item"><a class="page-link" href="#">...</a></li>
                      <li class="page-item"><a class="page-link" href="#">15</a></li>
                      <li class="page-item">
                        <a class="page-link" href="#">Newer</a>
                      </li>
                    </ul>
                  </nav>
              </div>

                  <div className="col-lg-3">
                    <div class="card mb-4">
                      <div class="card-header">
                        Search
                      </div>
                      <div class="card-body">
                        <div class="container-fluid">
                            <form class="d-flex justify-content-center">
                              <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
                              <button class="btn btn-primary" type="submit">Go!</button>
                            </form>
                          </div>
                        </div>
                    </div>

                    <div class="card mb-4">
                      <div class="card-header">
                        Categories
                      </div>
                      <div class="card-body">
                        <div className="row">
                          <div className="col-6">
                              <ul className='list-unstyled'>
                                <li>
                                  <a href="#">Web Design</a>
                                </li>

                                <li>
                                  <a href="#">HTML</a>
                                </li>

                                <li>
                                  <a href="#">Freebies</a>
                                </li>
                              </ul>
                          </div>

                          <div className="col-6">
                              <ul className='list-unstyled'>
                                  <li>
                                    <a href="#">JavaScript</a>
                                  </li>

                                  <li>
                                    <a href="#">CSS</a>
                                  </li>

                                  <li>
                                    <a href="#">Tutorials</a>
                                  </li>
                              </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card mb-4">
                      <div class="card-header">
                      Side Widget
                      </div>
                      <div class="card-body">
                        <div class="container-fluid">
                        You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!
                        </div>
                        </div>
                    </div>
                  </div>
            </div>

            
          </div>
        </section>

        <footer className='text-center py-5 bg-dark text-white'>
          <p>Copyright © Your Website 2023</p>
        </footer>
    </div>
  );
}

export default App;
