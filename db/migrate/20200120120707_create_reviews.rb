class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.text :body
      t.datetime :stayed_from
      t.datetime :stayed_to
      t.references :property, null: false, foreign_key: true

      t.timestamps
    end
  end
end
