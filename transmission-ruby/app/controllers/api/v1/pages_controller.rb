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
    def create
        page = Page.create(page_params)
        render json: {page: PageSerializer.new(page)}
    end
    def destroy
        page = Page.find(params[:id])  
        page.destroy
        render json: {message: "page successfully deleted"}
    end
    private
    def page_params
        params.require(:page).permit(:key, :content)
    end
end
