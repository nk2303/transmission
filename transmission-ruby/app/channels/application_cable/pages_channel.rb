class PagesChannel < ApplicationCable::Channel  
    def subscribed
        @page = Page.all.find{|p| p.url_key == params[:url_key]}
        stream_for @page
    end

    def receive(data)
        PagesChannel.broadcast_to(@page, {page: @page, url_key: @page.url_key, content: @page.content})
    end

    def unsubscribed
    end

end  