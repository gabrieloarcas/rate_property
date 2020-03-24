Rails.application.routes.draw do
  get 'static_pages/home'
  get 'static_pages/about'
  get :search, controller: :properties
  post '/rate' => 'rater#create', as: 'rate'
  devise_for :users
  resources :properties do
    resources :reviews
  end

  root "static_pages#home"
end
