Rails.application.routes.draw do

  devise_for :users
  resources :properties do
    resources :reviews
  end

  root "properties#index"
end
