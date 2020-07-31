class Api::V1::PagesController < ApplicationController
    def index
        # Can return array of url_keys only
        @pages = Page.all
        render json: @pages, status: :ok
    end

    def show
        page = Page.find(params[:id])
        render json: page
    end

    # When a browser ask for joinPage method, it means the user is joining the Page and can see all texts. 
    def joinPage
        page = Page.all.find{|p| p.url_key == params[:url_key]}
        render json: page
    end

    def create
        page = Page.create(page_params)
        render json: {page: PageSerializer.new(page)}
    end

    def update
        page = Page.all.find{|p| p.url_key == params[:url_key]}
        page.update(page_params)
        if page.valid? 
            ActionCable.server.broadcast 'page',
                page: page.content
                render json: { page: PageSerializer.new(page) }
            head :ok
        else
            render json: { error: 'failed to update page' }, status: :not_acceptable
        end
    end

    def destroy
        page = Page.find(params[:id])  
        page.destroy
        render json: {message: "page successfully deleted"}
    end

    private
    def page_params
        params.require(:page).permit(:url_key, :content)
    end
end
