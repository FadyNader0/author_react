import './nav.css'

export default function Nav() {
    return (
    <nav id="navbar-example2" class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-md">
            <a class="navbar-brand" href="#">Author<span>.</span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span>Menu</span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item pe-3">
                        <a class="nav-link" href="#home">Home</a>
                    </li>
                    <li class="nav-item pe-3">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item pe-3">
                        <a class="nav-link" href="#chapter">Chapter</a>
                    </li>
                    <li class="nav-item pe-3">
                        <a class="nav-link" href="#reviews">reviews</a>
                    </li>
                    <li class="nav-item pe-3">
                        <a class="nav-link" href="#my-books">my books</a>
                    </li>
                    <li class="nav-item pe-3">
                        <a class="nav-link" href="#author">Author</a>
                    </li>
                    <li class="nav-item pe-3">
                        <a class="nav-link" href="#contact">contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    )

}