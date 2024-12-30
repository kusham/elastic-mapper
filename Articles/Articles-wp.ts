interface Articles {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
        rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
        protected: boolean;
    };
    featured_media: number;
    template: string;
    meta: {
        _acf_changed: boolean;
        own_group: string;
    };
    resourceCategory: number[];
    resourceSector: number[];
    resourceTag: number[];
    resourceTopic: number[];
    userRelevance: number[];
    classList: string[];
    acf: {
        resource_description: string;
        resource_category: Term[];
        user_relevance: Term[];
        sector: Term[];
        topic: Term[];
        article_image: Image;
        article_description: string;
        article_option: string;
        authored_details: {
            heading: string;
            description: string;
        }[];
        resource_tags: Term[];
    };
    _links: _links;
}