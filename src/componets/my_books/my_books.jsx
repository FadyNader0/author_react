import './my_books.css'
import Box from '../../componets/my_books_box/my_books_box';

export default function MyBooks() {
    return (
        <section className="my_books" id="my-books">
        <div className="container-md">
          <div className="tittle">
            <span>Projects</span>
            <h3>My Other Books</h3>
          </div>
          <div className="row g-3">
            <div className="col-lg-3 col-md-4 col-sm-6">
                <Box />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <Box />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <Box />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <Box />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <Box />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <Box />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <Box />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <Box />
            </div>
          </div>
        </div>
      </section>
 
    )

}