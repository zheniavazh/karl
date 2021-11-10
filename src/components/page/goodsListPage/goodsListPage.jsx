import React, { useState, useEffect } from "react";
import "./goodsListPage.css";
import _ from "lodash";
import API from "../../../api";
import GoodsList from "../../ui/goodsList/goodsList";
import GroupList from "../../common/groupList/groupList";
import Search from "../../common/search/search";

const GoodsListPage = () => {
  const [goods, setGoods] = useState([]);
  const [categories, setCategories] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [searchData, setSearchData] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    API.goods.fetchAll().then((data) => setGoods(data));
  }, []);
  useEffect(() => {
    API.categories.fetchAll().then((data) => setCategories(data));
  }, []);

  const handleCategorySelect = (item) => {
    if (searchData !== "") setSearchData("");
    setSelectedCategory(item);
  };

  const handleChange = ({ target }) => {
    setSelectedCategory(undefined);
    setSearchData(target.value);
  };

  const handleSort = (order) => {
    setSortBy(order);
  };

  if (goods) {
    const filteredGoods = searchData
      ? goods.filter((good) =>
          good.name.toLowerCase().includes(searchData.toLowerCase())
        )
      : selectedCategory
      ? goods.filter((good) => {
          return (
            JSON.stringify(good.category) === JSON.stringify(selectedCategory)
          );
        })
      : goods;
    const clearFilter = () => {
      setSelectedCategory();
    };
    const sortedGoods = _.orderBy(filteredGoods, ["price"], [sortBy]);

    return (
      <div className="main">
        <div className="app_wrapper">
          <div className="main_content-top">
            <div className="main_content_search">
              <Search value={searchData} onChange={handleChange} />
            </div>
            <div className="main_content_sort">
              Сортировка: по{" "}
              <span className="sort" onClick={() => handleSort("asc")}>
                возрастанию
              </span>{" "}
              /{" "}
              <span className="sort" onClick={() => handleSort("desc")}>
                убыванию
              </span>{" "}
              цены
            </div>
          </div>
          <div className="main_content-bottom">
            {categories && (
              <div className="main_content-left">
                <GroupList
                  items={categories}
                  onItemSelect={handleCategorySelect}
                  selectedItem={selectedCategory}
                />
                <div className="clear-button" onClick={clearFilter}>
                  Очистить
                </div>
              </div>
            )}
            <div className="main_content-right">
              <div className="main_goods">
                <GoodsList goods={sortBy ? sortedGoods : filteredGoods} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default GoodsListPage;
