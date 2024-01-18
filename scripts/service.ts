import axios from 'axios';

// 掘金 API
const JUEJIN_API = {
  /** 获取草稿 */
  DRAFTS: 'https://api.juejin.cn/content_api/v1/article_draft/list_by_user?aid=2608&uuid=7301996778420225599&spider=0',
  /** 更新文章 */
  UPDATE_POST: 'https://api.juejin.cn/content_api/v1/article_draft/update?aid=2608&uuid=7301996778420225599',
  /** 发布文章 */
  PUBLISH_POST: 'https://api.juejin.cn/content_api/v1/article/publish?aid=2608&uuid=7301996778420225599',
};

// 掘金标签
const JUEJIN_TAGS = {
  /** 前端 */
  FRONTEND: '6809640407484334093',
  /** 程序员 */
  PROGRAMMER: '6809640482725953550',
  /** 资讯 */
  NEWS: '6809641083107016712',
};

// 掘金分类
const JUEJIN_CATEGORY = {
  /** 前端 */
  FRONTEND: '6809637767543259144',
};

// 掘金专栏
const JUEJIN_COLUMN = {
  /** 前端技术新闻周刊 */
  FE_NEWS_WEEKLY: '7304558952179023908',
};

// 掘金主题
const JUEJIN_THEME = {
  /** 默认主题 */
  DEFAULT: '7210228048107896891',
};

export default class Service {
  constructor({ cookie }) {
    this.cookie = cookie;
  }

  private cookie = '';

  // 获取配置
  getConfig() {
    return {
      headers: {
        Cookie: this.cookie,
        'Content-Type': 'application/json',
      },
    };
  }

  // 获取草稿
  async getDrafts() {
    const config = this.getConfig();
    const params = { keyword: '', page_no: 1, page_size: 10 };
    const res = await axios.post(JUEJIN_API.DRAFTS, params, config);
    return res.data?.data;
  }

  // 更新文章
  updatePost(params) {
    const { id, title, image, content } = params;
    const config = this.getConfig();
    const requestParams = {
      id,
      category_id: JUEJIN_COLUMN.FE_NEWS_WEEKLY,
      tag_ids: [JUEJIN_TAGS.FRONTEND, JUEJIN_TAGS.PROGRAMMER, JUEJIN_TAGS.NEWS],
      theme_ids: [JUEJIN_THEME.DEFAULT],
      link_url: '',
      cover_image: image,
      is_gfw: 0,
      title,
      brief_content: title,
      is_english: 0,
      is_original: 1,
      edit_type: 10,
      html_content: 'deprecated',
      mark_content: content,
    };
    return axios.post(JUEJIN_API.UPDATE_POST, requestParams, config);
  }

  // 发布文章
  publishPost(params) {
    const { id } = params;
    const config = this.getConfig();
    const requestParams = {
      draft_id: id,
      sync_to_org: false,
      column_ids: [JUEJIN_CATEGORY.FRONTEND],
      theme_ids: [JUEJIN_THEME.DEFAULT],
      encrypted_word_count: 1079009,
      origin_word_count: 1181,
    };
    return axios.post(JUEJIN_API.PUBLISH_POST, requestParams, config);
  }
}
