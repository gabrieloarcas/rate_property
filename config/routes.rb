Rails.application.routes.draw do
  get :search, controller: :properties
  post '/rate' => 'rater#create', as: 'rate'
  devise_for :users
  resources :properties do
    resources :reviews
  end

  root "properties#index"
end
