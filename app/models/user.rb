class User < ApplicationRecord
    has_many :user_clients
    belongs_to :company
    has_many :clients, through: :user_clients
    has_many :properties, through: :company
end
