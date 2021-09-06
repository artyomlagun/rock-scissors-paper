Rails.application.routes.draw do
  root 'home#index'
  post :generate_choice, to: 'home#generate_choice'
end
