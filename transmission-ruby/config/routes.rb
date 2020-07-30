Rails.application.routes.draw do
  namespace :api do 
    namespace :v1 do 
      resources :pages
      put '/k/:url_key', to: 'pages#update'
      get '/k/:url_key', to: 'pages#sharePage'
      # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    end
  end
end
