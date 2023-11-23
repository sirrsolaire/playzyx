import { ConfigProvider, Space, Tag } from "antd";
import useTags from "../../hooks/generals/useTags.js";
import { useDispatch, useSelector } from "react-redux";
import { setTag } from "../../reducers/filterSlice.js";

const Tags = () => {
  const selectedTag = useSelector((state) => state.filtering.tag);
  const dispatch = useDispatch();
  const { data: tagData } = useTags({ selectedTag });

  const handleTagClick = (tagId) => {
    dispatch(setTag(tagId));
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Tag: {
            colorText: "white",
            colorTextDescription: "white",
            fontSize: 40,
            colorBorder: "none",
            borderRadiusSM: 20,
            fontSizeSM: 15,
            fontSizeIcon: 15,
            paddingXXS: 14,
          },
        },
      }}
    >
      <Space
        size={[0, 8]}
        wrap
        className="mx-1 mt-3 flex justify-center smallTb:mx-0 tablet:justify-start"
      >
        {tagData?.map((tag) => (
          <Tag
            key={tag.id}
            // closeIcon={<CloseCircleOutlined />}
            className={`cursor-pointer bg-[#232b2b] px-3 py-1 transition-all duration-200 ${
              selectedTag === tag.id
                ? "bg-[#414a4c] font-semibold opacity-100"
                : "opacity-60"
            }`}
            onClick={() => handleTagClick(tag.id)}
          >
            {tag.name}
          </Tag>
        ))}
      </Space>
    </ConfigProvider>
  );
};
export default Tags;
