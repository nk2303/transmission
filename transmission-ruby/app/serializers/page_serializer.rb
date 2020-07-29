class PageSerializer < ActiveModel::Serializer
  attributes :id, :url_key, :content
end
