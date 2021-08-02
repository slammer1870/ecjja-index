import { useState } from "react";
import VideoPlayer from "./VideoPlayer";

const VideoGrid = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("hello");
  return (
    <div>
      <div className="flex">
        <label for="series">Choose a series:</label>

        <select name="series" id="series">
          {categories.map((category) => (
            <option
              value={category.title}
              onClick={() => setSelectedCategory(category.title)}
            >
              {category.title}
            </option>
          ))}
        </select>
        <grid className="grid">
          {posts
            .filter((post) => post.categories.includes(selectedCategory))
            .map((post) => (
              <VideoPlayer video={post} />
            ))}
        </grid>
      </div>
    </div>
  );
};

export default VideoGrid;
