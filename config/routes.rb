Rails.application.routes.draw do
  resources :users
  resources :properties
  resources :clients
  resources :companies
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
