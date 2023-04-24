import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

const SingeBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-4" />
                  Go Back to Blogs
                </Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img
                  src="images/blog-1.jpg"
                  className="img-fluid w-100 my-4"
                  alt="blog"
                />
                <p>
                  You're only as good as your last collection, which is an
                  enormous pressure. I think there is something people need, but
                  it's what they want. It really pulls at their heart. I have a
                  fantastic relationship with money. Scelerisque sociosqu
                  ullamcorper urna nisl. You're only as good as your last
                  collection, which is an enormous pressure. I think there is
                  something people need, but it's what they want. It really
                  pulls at their heart. I have a fantastic relationship with
                  money. Scelerisque sociosqu ullamcorper urna nisl.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingeBlog;
