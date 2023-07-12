import Link from "next/link";
import RetailerImg from "../public/retailer-current-listing.png";
import Image from "next/image";

const ProjectsGrid = () => {
  return (
    <div className="px-16 pt-2 pb-20 projects_grid">
      {/* Item One */}
      <Link href="/">
        <div className="projects_grid_item">
          <div className="projects_grid_item_img">
            <Image src={RetailerImg} alt="Retailer" />
          </div>

          <h5>Retailer</h5>
        </div>
      </Link>

      {/* Item One */}
      <Link href="/">
        <div className="projects_grid_item">
          <div className="projects_grid_item_img">
            <Image src={RetailerImg} alt="Retailer" />
          </div>

          <h5>Retailer</h5>
        </div>
      </Link>

      {/* Item One */}
      <Link href="/">
        <div className="projects_grid_item">
          <div className="projects_grid_item_img">
            <Image src={RetailerImg} alt="Retailer" />
          </div>

          <h5>Retailer</h5>
        </div>
      </Link>
    </div>
  );
};

export default ProjectsGrid;
